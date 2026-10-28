import Link from "next/link";

export default function NotFound() {
  return <main className="container py-5 text-center">
    <h1>Page not found</h1>
    <p>The job, profile, or article you requested could not be found.</p>
    <Link className="rts__btn fill__btn d-inline-flex" href="/">Back to Jobpath</Link>
  </main>;
}
