import React, { Fragment, useState, useEffect } from "react";
import EditLink from "./EditLink";

const ListLinks = () => {
  const [links, setLinks] = useState([]);

  //delete todo function
  async function deleteLink(id) {
    try {
      await fetch(`/links/${id}`, {
        method: "DELETE",
      });

      setLinks(links.filter((link) => link.link_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getLinks() {
    const response = await fetch("/links");
    const linksArray = await response.json();
    setLinks(linksArray);
  }

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => (
            <tr key={link.link_id}>
              <td>{link.link}</td>
              <td>{link.category}</td>
              <td>
                <EditLink link={link} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteLink(link.link_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListLinks;
