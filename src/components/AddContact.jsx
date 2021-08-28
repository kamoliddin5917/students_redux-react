import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import nextId from "react-id-generator";

const AddContact = () => {
  // let htmlId = nextId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const history = useHistory();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const [ids] = useState(
    contacts[contacts.length - 1] ? contacts[contacts.length - 1].id + 1 : 0
  );

  const handelSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number) && contact
    );

    if (!email || !number || !name) {
      return toast.warning("Plase fill in all fields");
    }

    if (checkEmail) {
      return toast.error("This email already Exists!");
    }
    if (checkNumber) {
      return toast.error("This number already Exists!");
    }

    const data = {
      id: ids,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student added successfully!");
    history.push("/");
  };

  return (
    <div className="container ">
      <div className="row">
        <h1 className="display-3 text-center">Add Contact</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handelSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                className="form-control my-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                className="form-control"
                type="number"
                placeholder="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-blick btn-dark mt-3"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
