import S from "@sanity/desk-tool/structure-builder";

const filteredDocTypes = ["siteSettings", "route"];

export default () =>
  S.list()
    .title("Site")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !filteredDocTypes.includes(listItem.getId())
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
            ])
        ),
    ]);
