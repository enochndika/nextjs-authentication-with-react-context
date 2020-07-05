import React from "react";
import Head from "next/head";
import { AdminRoute } from "../auth/adminRoutes";

function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | MarsJupyter</title>
      </Head>

      <div>
        <div className="row">
          <div className="col-md-12">
            <h1 test-id="dashboard-title">These are your pages</h1>
            <br />
            <table className="table table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Shareable Link</th>
                  <th scope="col">Created</th>
                  <th scope="col">Responses</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminRoute(Dashboard);
