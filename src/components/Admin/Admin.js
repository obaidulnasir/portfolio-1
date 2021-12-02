import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Admin = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/addProject", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
          .then(res =>res.json())
          .then(data => {
                alert("review added successfully!!")
                reset();
                console.log(data)
          })
        console.log(data)
        
    };


    return (
        <div>
            <Container>
                <div className="row w-50 mx-auto my-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Project Name</label>
                            <input
                                type="name"
                                className="form-control"
                                defaultValue=""
                                placeholder="Your Name"
                                {...register("projectName", { required: true })}
                            />
                        </div>
                        {/* LIVE lin  */}
                        <div className="form-group">
                            <label>Live link</label>
                            <input
                                type="name"
                                className="form-control"
                                defaultValue=""
                                placeholder="live link"
                                {...register("liveLink", { required: true })}
                            />
                        </div>
                        {/* Client code link  */}
                        <div className="form-group">
                            <label>Client code link</label>
                            <input
                                type="name"
                                className="form-control"
                                defaultValue=""
                                placeholder="Client code link"
                                {...register("clientCode", { required: true })}
                            />
                        </div>
                        {/* SERVER code link  */}
                        <div className="form-group">
                            <label>Server code link</label>
                            <input
                                type="name"
                                className="form-control"
                                defaultValue=""
                                placeholder="server code link"
                                {...register("serverCode", { required: true })}
                            />
                        </div>
                        {/* IMG link  */}
                        <div className="form-group">
                            <label>Image Link 1</label>
                            <input
                                type="name"
                                className="form-control"
                                defaultValue=""
                                placeholder="img-1"
                                {...register("img1", { required: true })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Image Link 2</label>
                            <input
                                type="name"
                                className="form-control"
                                defaultValue=""
                                placeholder="img-2"
                                {...register("img2", { required: true })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Image Link 3</label>
                            <input
                                type="name"
                                className="form-control"
                                defaultValue=""
                                placeholder="img-3"
                                {...register("img3", { required: true })}
                            />
                        </div>
                        {/* <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                defaultValue={user.email}
                                {...register("email", { required: true })}
                            />
                        </div> */}
                        {/* <div className="form-group">
                            <label>Rating</label>
                            <input
                                type="number"
                                min="1" max="5"
                                className="form-control"
                                defaultValue=""
                                placeholder="Give Rating (1-5)"
                                {...register("rating", { required: true })}
                            />
                        </div> */}
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                {...register("description", { required: true })}
                            ></textarea>
                            {errors.password && <span>This field is required</span>}
                        </div>

                        <input className="btn btn-dark mt-3" type="submit" value="Add Review" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Admin;