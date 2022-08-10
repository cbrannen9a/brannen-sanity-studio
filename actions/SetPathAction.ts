import { useEffect, useState } from "react";
import {
  DocumentActionComponent,
  useClient,
  useDocumentOperation,
} from "sanity";

function getPath(route, subRoute) {
  const main = route?.slug?.current ?? "";
  const partial = subRoute?.slug?.current ?? "";
  if (main && partial) {
    return `${main}/${partial}`;
  }

  if (main && !partial) {
    return `${main}`;
  }

  if (!main && partial) {
    return `${partial}`;
  }
  return "/";
}

export const SetPathAction: DocumentActionComponent = ({
  id,
  type,
  published,
  draft,
  onComplete,
}) => {
  const client = useClient();
  const { patch, publish } = useDocumentOperation(id, type);
  const [isPublishing, setIsPublishing] = useState(false);

  const doc = draft || published;

  //   console.log("draft", draft);
  //   console.log("published", published);

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !draft) {
      setIsPublishing(false);
    }
  }, [draft]);

  return {
    disabled: publish.disabled,
    label: isPublishing ? "Publishing…" : "Publish",
    tone: "positive",
    onHandle: async () => {
      // This will update the button text
      setIsPublishing(true);
      let route;

      if (draft.parentRoute) {
        route = await client.fetch(
          `*[_type == "route" && _id == $id][0]{ slug }`,
          {
            id: draft.parentRoute._ref,
          }
        );
      }
      // Set publishedAt to current date and time
      patch.execute([
        {
          set: {
            path: getPath(route, doc),
            statusDate:
              doc.statusDate ?? new Date().toISOString().split("T")[0],
          },
        },
      ]);

      // Perform the publish
      publish.execute();

      // Signal that the action is completed
      onComplete();
    },
  };
};
