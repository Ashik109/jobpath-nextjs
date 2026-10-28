import JobList1Grid from "./JobList1Grid";
import JobList1List from "./JobList1List";
import JobList2Grid from "./JobList2Grid";
import JobList2List from "./JobList2List";
import JobList3Grid from "./JobList3Grid";
import JobList3List from "./JobList3List";
import JobList4Grid from "./JobList4Grid";
import JobList4List from "./JobList4List";
import JobList5Grid from "./JobList5Grid";
import JobList5List from "./JobList5List";
import Employer1Grid from "./Employer1Grid";
import Employer1List from "./Employer1List";
import Employer2Grid from "./Employer2Grid";
import Employer2List from "./Employer2List";
import Employer3Grid from "./Employer3Grid";
import Employer3List from "./Employer3List";

export const originalCards = {
  "job-list-1": { Grid: JobList1Grid, List: JobList1List, gridColumn: "col-xl-6 col-md-6 col-lg-12", listColumn: "col-lg-12", row: "row g-30", gridPane: "tab-pane grid__style fade show active", listPane: "tab-pane fade list__style" },
  "job-list-2": { Grid: JobList2Grid, List: JobList2List, gridColumn: "col-xl-6 col-md-6 col-lg-12", listColumn: "col-lg-12", row: "row g-30", gridPane: "tab-pane grid__style fade", listPane: "tab-pane fade show active list__style" },
  "job-list-3": { Grid: JobList3Grid, List: JobList3List, gridColumn: "col-lg-12", listColumn: "col-lg-12", row: "row g-30", gridPane: "", listPane: "" },
  "job-list-4": { Grid: JobList4Grid, List: JobList4List, gridColumn: "col-xl-4 col-lg-6 col-md-11", listColumn: "col-xl-4 col-lg-6 col-md-11", row: "row justify-content-start g-30", gridPane: "", listPane: "" },
  "job-list-5": { Grid: JobList5Grid, List: JobList5List, gridColumn: "col-lg-12 col-xxl-6", listColumn: "col-lg-12 col-xxl-6", row: "row g-30 is__style__five", gridPane: "", listPane: "" },
  "employer-1": { Grid: Employer1Grid, List: Employer1List, gridColumn: "col-lg-6 col-md-6", listColumn: "col-lg-6 col-md-6", row: "row g-30", gridPane: "tab-pane fade show  active", listPane: "tab-pane grid__style fade" },
  "employer-2": { Grid: Employer2Grid, List: Employer2List, gridColumn: "col-lg-6 col-md-6", listColumn: "col-lg-6 col-md-6", row: "row g-30", gridPane: "tab-pane fade", listPane: "tab-pane grid__style fade show active" },
  "employer-3": { Grid: Employer3Grid, List: Employer3List, gridColumn: "col-xl-4 col-lg-4 col-md-6", listColumn: "col-xl-4 col-lg-4 col-md-6", row: "row g-30", gridPane: "", listPane: "" }
};
