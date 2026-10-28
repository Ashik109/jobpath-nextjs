import CatalogResults from "@/app/components/CatalogResults";

export default function Section2() {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <CatalogResults kind="blog" tabs={false} />
      </div>
    </div>
  );
}
