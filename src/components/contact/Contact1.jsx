import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api-xsustain-main/handle-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
      reset();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Let’s get in touch
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  {
                    "Great! We're excited to hear from you and let's start something special togerter. call us for any inquery."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  {"Don't be afraid man ! "}
                  <br />
                  say hello
                </h3>
                <ul>
                  <li>
                    <a href="tel:+(216)58113798">+(216) 58 - 113 - 798</a>
                  </li>
                  <li>
                    <a href="tel:+(216)22199957">+(216) 22 - 199 - 957</a>
                  </li>
                  <li>
                    <a href="mailto:contact@xsustain.io">contact@xsustain.io</a>
                  </li>
                  <li>
                    <span>
                      40 Av. Habib Bourguiba, Bardo <br /> Tunisia
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input {...register("name", { required: "Name is required" })} placeholder="Name *" className="input" />
                    {errors.name && <p className="error">{errors.name.message}</p>}

                    <input {...register("email", { required: "Email is required", pattern: { value: /.+@.+\..+/, message: "Invalid email" } })} placeholder="Email *" className="input" />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <input {...register("phone", { required: "Phone number is required" })} placeholder="Phone" className="input" />
                    {errors.phone && <p className="error">{errors.phone.message}</p>}

                    <input {...register("subject", { required: "Subject is required" })} placeholder="Subject *" className="input" />
                    {errors.subject && <p className="error">{errors.subject.message}</p>}
                  </div>

                  <div className="mt-3">
                    <textarea {...register("message", { required: "Message is required" })} placeholder="Messages *" className="textarea"></textarea>
                    {errors.message && <p className="error">{errors.message.message}</p>}
                  </div>

                  <div className="mt-3">
                    <button type="submit" className="btn" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
