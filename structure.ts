import { StructureBuilder } from "sanity/desk";

const filteredDocTypes = ["siteSettings", "route", "theme", "socialTypes"];

export default (S: StructureBuilder) =>
  S.list()
    .title("Site")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.documentTypeList("route")
            .title("Routes")
            .child(async (itemId) => {
              return S.documentList()
                .title("Pages")
                .filter('_type == "page" && $itemId == parentRoute._ref')
                .params({ itemId });
            })
        ),
      ...S.documentTypeListItems().filter(
        (listItem: any) => !filteredDocTypes.includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title("Settings")
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Site Settings")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
              S.listItem()
                .title("Routes")
                .schemaType("route")
                .child(S.documentTypeList("route").title("Routes")),
              S.listItem()
                .title("Themes")
                .schemaType("theme")
                .child(S.documentTypeList("theme").title("Themes")),
              S.listItem()
                .title("SocialTypes")
                .schemaType("socialTypes")
                .child(S.documentTypeList("socialTypes").title("Social")),
            ])
        ),
    ]);
