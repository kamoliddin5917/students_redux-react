import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => String(contact.id) === String(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handelSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
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
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student added successfully!");
    history.push("/");
  };

  return (
    <div className="container ">
      {currentContact ? (
        <div className="row">
          <h1 className="display-3 text-center">Edit Student {id}</h1>
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
                  className="form-control mb-3"
                  type="number"
                  placeholder="Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="btn btn-blick btn-dark"
                  type="submit"
                  value="Update Student"
                />
                <Link className="btn btn-danger ms-3" to="/">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h1 className="alert alert-danger text-center my-5" role="alert">
          Student Contac with id {id} not exitsts
        </h1>
      )}
    </div>
  );
};

export default EditContact;
