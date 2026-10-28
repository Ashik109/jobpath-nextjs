import type { DetailRecord } from "@/data/details";
export default function Breadcrumb({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section breadcrumb__background"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-12 position-relative d-flex justify-content-between align-items-center"}>
            <div className={"breadcrumb__area max-content breadcrumb__padding"} aria-label={detailContent.title}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
