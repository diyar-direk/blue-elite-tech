import React, { useContext, useState } from "react";
import "../../components/dashboard-form.css";
import Formloading from "../../../../components/Formloading";
import axios from "axios";
import { Context } from "../../../../context/Context";
import { useNavigate, useParams } from "react-router-dom";
const UpdateCours = () => {
  const context = useContext(Context);
  const token = context.userDetails.token;
  const params = useParams();
  const nav = useNavigate();
  const [headLine, setHeadline] = useState({
    arabic: "",
    english: "",
    kurdish: "",
  });
  const [summary, setSummary] = useState({
    arabic: "",
    english: "",
    kurdish: "",
  });
  const [image, setImage] = useState(false);
  const [errimage, setErrImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [oldPhoto, setOldPhoto] = useState(false);
  useState(() => {
    axios.get(`http://localhost:8000/api/courses/${params.id}`).then((res) => {
      setHeadline(res.data.course.headline);
      setSummary(res.data.course.summary);
      setOldPhoto(res.data.course.photo);
    });
  }, []);

  function headlineFun(e) {
    setHeadline({ ...headLine, [e.target.name]: e.target.value });
  }

  function summaryFun(e) {
    setSummary({ ...summary, [e.target.name]: e.target.value });
  }
  async function submitData(e) {
    e.preventDefault();
    const photo = image ? image : oldPhoto;

    if (!photo) setErrImage(true);
    if (photo && headLine && summary) {
      try {
        setLoading(true);
        const formData = new FormData();

        formData.append("headline", JSON.stringify(headLine));
        formData.append("summary", JSON.stringify(summary));
        image && formData.append("photo", image);

        const data = await axios.patch(
          `http://localhost:8000/api/courses/${params.id}`,
          formData,
          { headers: { Authorization: "Bearer " + token } }
        );
        nav("/dashboard/courses");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <div className="main-dashboard">
      <div className="dashboard-container">
        <form onSubmit={submitData} className="dashboard-form relative">
          <h2>add a new course</h2>
          {loading && <Formloading />}
          <div className="flex">
            <div>
              <label htmlFor="ku-headline">kurdish headline</label>
              <input
                onInput={headlineFun}
                value={headLine.kurdish}
                className="inp"
                name="kurdish"
                required
                type="text"
                id="ku-headline"
                placeholder="write a course headline"
              />
            </div>
            <div>
              <label htmlFor="en-headline">english headline</label>
              <input
                onInput={headlineFun}
                value={headLine.english}
                className="inp"
                name="english"
                required
                type="text"
                id="en-headline"
                placeholder="write a course headline"
              />
            </div>
            <div className="arabic">
              <label htmlFor="ar-headline">العنوان بالعربي</label>
              <input
                onInput={headlineFun}
                value={headLine.arabic}
                name="arabic"
                className="inp"
                required
                type="text"
                id="ar-headline"
                placeholder="اكتب عنوان الدورة"
              />
            </div>
          </div>

          <div className="flex">
            <div>
              <label htmlFor="ku-description">kurdish description</label>
              <textarea
                className="inp"
                required
                rows={4}
                onInput={summaryFun}
                id="ku-description"
                placeholder="write a course description"
                value={summary.kurdish}
                name="kurdish"
              />
            </div>
            <div>
              <label htmlFor="en-description">english description</label>
              <textarea
                className="inp"
                rows={4}
                onInput={summaryFun}
                required
                id="en-description"
                placeholder="write a course description"
                value={summary.english}
                name="english"
              />
            </div>
            <div className="arabic">
              <label htmlFor="ar-description">الوصف بالعربي</label>
              <textarea
                name="arabic"
                className="inp"
                required
                onInput={summaryFun}
                rows={4}
                value={summary.arabic}
                id="ar-description"
                placeholder="اكتب وصف للدورة"
              />
            </div>
          </div>

          <label className="w-100" htmlFor="file">
            <p className="lable"> add photo </p>
            <input
              className="inp"
              onInput={(e) => {
                setImage(e.target.files[0]);
                setErrImage(false);
                setOldPhoto(false);
              }}
              type="file"
              name=""
              id="file"
              accept="image/*"
            />
            <div className="inp center">
              choose img <i className="fa-regular fa-images"></i>
            </div>
          </label>
          {errimage && <p className="error-text"> uploade image to set </p>}
          {image && (
            <div className="relative remove">
              <img
                src={URL.createObjectURL(image)}
                loading="lazy"
                alt="uploaded"
              />
              <i className="fa-solid fa-x" onClick={() => setImage(false)}></i>
            </div>
          )}
          {oldPhoto && (
            <div className="relative remove">
              <img
                src={`http://localhost:8000/img/${oldPhoto}`}
                loading="lazy"
                alt="uploaded"
              />
              <i
                className="fa-solid fa-x"
                onClick={() => setOldPhoto(false)}
              ></i>
            </div>
          )}
          <button className="btn2"> submit </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCours;
