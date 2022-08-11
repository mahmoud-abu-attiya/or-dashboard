import { useEffect, useState } from "react";

const AddServiceForm = (props) => {
  const [mark, setMark] = useState(false);
  const [web, setWeb] = useState(false);
  const [app, setApp] = useState(false);
  useEffect(() => {
    let selectService = document.querySelector("select.shadow-sm");
    selectService.onchange = () => {
      switch (selectService.value) {
        case "markting":
          console.log("mark");
          setApp(false);
          setWeb(false);
          setMark(true);
          break;
        case "web":
          console.log("web");
          setApp(false);
          setWeb(true);
          setMark(false);
          break;
        case "apps":
          console.log("apps");
          setApp(true);
          setWeb(false);
          setMark(false);
          break;
        default:
          console.log("none");
          setApp(false);
          setWeb(false);
          setMark(false);
          break;
      }
    };
  }, []);
  return (
    <div className="add_service_model model">
      <form action="POST" className="car">
        <h5>add new service for {props.client}</h5>
        <hr />
        <div className="inputs">
          <select className="shadow-sm">
            <option value="0" defaultValue>
              Select Service
            </option>
            <option value="markting">Markting</option>
            <option value="web">Web Development</option>
            <option value="apps">Apps Development</option>
          </select>
          {mark && <textarea placeholder="Details"></textarea>}
          {web && (
            <div>
              <input type="text" placeholder="Project Name" />
              <textarea placeholder="Details"></textarea>
            </div>
          )}
          {app && (
            <div>
              <input type="text" placeholder="Project Name" />
              <textarea placeholder="Details"></textarea>
            </div>
          )}
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddServiceForm;
