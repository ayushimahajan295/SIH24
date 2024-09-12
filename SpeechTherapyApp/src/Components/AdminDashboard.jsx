import React, { useState } from "react";
import logo from "../Assets/app-logo.png";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, firstname: "John", lastname: "Doe", role: "Therapist" },
    { id: 2, firstname: "Jane", lastname: "Smith", role: "Supervisor" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", role: "" });
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();
    const nextId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { ...newUser, id: nextId }]);
    setNewUser({ firstname: "", lastname: "", role: "" });
    setShowAddUserForm(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleEditClick = (user) => {
    setEditingUser(user);
    setIsEditing(true);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    setUsers(users.map((user) => 
      user.id === editingUser.id ? editingUser : user
    ));
    setIsEditing(false);  // Hide the edit form
  };
  

  return (
    <div className="">
      <nav
        class="navbar bg-dark border-bottom border-body navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} id="web-logo" />
            Speech Therapy
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav space">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/admin-dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Resources
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <p class="d-inline-flex gap-1 mt-2 ml-2">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse1"
          aria-expanded="false"
          aria-controls="collapse1"
        >
          Add a Therapist
        </button>
      </p>
      <p class="d-inline-flex gap-1 mt-2">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse2"
          aria-expanded="false"
          aria-controls="collapse2"
        >
          Add a Supervisor
        </button>
      </p>
      <div class="collapse" id="collapse1">
        <div class="card card-body">
          <div class="container mt-4">
            <h3>Add New Therapist</h3>
            <form class="mt-3" onSubmit={handleAddUser}>
              <div class="mb-3">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="Enter first name"
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstname: e.target.value })
                  }
                  required
                />
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastname: e.target.value })
                  }
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="specialization" class="form-label">
                  Specialization
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="specialization"
                  placeholder="Enter specialization"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="experience" class="form-label">
                  Years of Experience
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="experience"
                  placeholder="Enter years of experience"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Create a password"
                  required
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={() => setNewUser({ ...newUser, role: "Therapist" })}
              >
                Add Therapist
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="collapse" id="collapse2">
        <div class="card card-body">
          <div class="container mt-4">
            <h3>Add New Supervisor</h3>
            <form class="mt-3" onSubmit={handleAddUser}>
              <div class="mb-3">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="Enter first name"
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstname: e.target.value })
                  }
                  required
                />
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastname: e.target.value })
                  }
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="specialization" class="form-label">
                  Specialization
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="specialization"
                  placeholder="Enter specialization"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="experience" class="form-label">
                  Years of Experience
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="experience"
                  placeholder="Enter years of experience"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Create a password"
                  required
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={() => setNewUser({ ...newUser, role: "Supervisor" })}
              >
                Add Supervisor
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="user-list mt-4 ml-5 mr-5">
        <h3>Existing Users</h3>
        <ul class="list-group">
          {users.map((user) => (
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              key={user.id}
            >
              {user.firstname} {user.lastname} ({user.role})
              <button
                class="btn btn-secondary btn-sm mr-2"
                onClick={() => handleEditClick(user)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>

        {isEditing && (
  <div class="card card-body mt-3">
    <h3>Edit User</h3>
    <form class="mt-3" onSubmit={handleUpdateUser}>
      <div class="mb-3">
        <label for="firstNameEdit" class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstNameEdit"
          value={editingUser.firstname}
          onChange={(e) =>
            setEditingUser({ ...editingUser, firstname: e.target.value })
          }
          required
        />
      </div>
      <div class="mb-3">
        <label for="lastNameEdit" class="form-label">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastNameEdit"
          value={editingUser.lastname}
          onChange={(e) =>
            setEditingUser({ ...editingUser, lastname: e.target.value })
          }
          required
        />
      </div>
      <div class="mb-3">
        <label for="roleEdit" class="form-label">Role</label>
        <select
          class="form-control"
          id="roleEdit"
          value={editingUser.role}
          onChange={(e) =>
            setEditingUser({ ...editingUser, role: e.target.value })
          }
        >
          <option value="Therapist">Therapist</option>
          <option value="Supervisor">Supervisor</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">
        Save Changes
      </button>
      <button
        type="button"
        class="btn btn-secondary ml-2"
        onClick={() => setIsEditing(false)}
      >
        Cancel
      </button>
    </form>
  </div>
)}

      </div>
    </div>
  );
};

export default AdminDashboard;
