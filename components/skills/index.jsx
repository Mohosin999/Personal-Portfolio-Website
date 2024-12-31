import Service from "../ui/Service";

const Skills = () => {
  return (
    <div className="w-full bg-secondarycolor h-full flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-14 flex flex-col items-center justify-center gap-4">
        {/* Heading */}
        <h2 className="text-5xl font-bold pb-6">My Services</h2>
        <div className="w-full gap-4 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4">
            {/* ========================================================
           *                      Service 01
           ======================================================== */}
            <Service
              src={"./img/serv01.png"}
              title={"Responsive Web Design"}
              params={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum, asperiores quis maxime natus laboriosam.`}
            />
            {/* ========================================================
           *                      Service 02
           ======================================================== */}
            <Service
              src={"./img/serv02.png"}
              title={"Web Application Development"}
              params={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum, asperiores quis maxime natus laboriosam.`}
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            {/* ========================================================
            *                      Service 03
           ======================================================== */}
            <Service
              src={"./img/serv03.png"}
              title={"SEO-Friendly NextJS Website"}
              params={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum, asperiores quis maxime natus laboriosam.`}
            />

            {/* ========================================================
            *                      Service 04
            ======================================================== */}
            <Service
              src={"./img/serv04.png"}
              title={"Custom UI/UX Design"}
              params={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum, asperiores quis maxime natus laboriosam.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
