const Services = () => {
  return (
    <div className="w-full bg-secondarycolor h-full flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-14 flex flex-col items-center justify-center gap-4">
        {/* Heading */}
        <h2 className="text-6xl font-bold pb-6">What I Do</h2>
        <div className="w-full gap-6 flex items-center justify-center">
          {/* ========================================================
           *                      Service 01
           ======================================================== */}
          <div className="w-1/2">
            <div className="rounded-xl p-6 min-h-64 bg-secondarycolor border border-gray-600/[0.5]">
              <div className="flex items-center gap-3">
                {/* Service's logo */}
                <div className="w-14 h-14">
                  <img
                    src={"./img/serv01.png"}
                    alt="service_one"
                    className="w-full h-full"
                  />
                </div>
                {/* Service's name */}
                <div>
                  <h2 className="text-2xl font-bold">Responsive Web Design</h2>
                </div>
              </div>
              {/* Description */}
              <div className="w-full py-3">
                <p className="text-sm text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum, asperiores quis maxime natus laboriosam.
                </p>
              </div>
            </div>
          </div>
          {/* ========================================================
           *                      Service 02
           ======================================================== */}
          <div className="w-1/2">
            <div className="rounded-xl p-6 min-h-64 bg-secondarycolor border border-gray-600/[0.5]">
              <div className="flex items-center gap-3">
                {/* Service's logo */}
                <div className="w-14 h-14">
                  <img
                    src={"./img/serv02.png"}
                    alt="service_one"
                    className="w-full h-full"
                  />
                </div>
                {/* Service's name */}
                <div>
                  <h2 className="text-2xl font-bold">Web App Development</h2>
                </div>
              </div>
              {/* Description */}
              <div className="w-full py-3">
                <p className="text-sm text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum, asperiores quis maxime natus laboriosam.
                </p>
              </div>
            </div>
          </div>
          {/* ========================================================
            *                      Service 03
           ======================================================== */}
          <div className="w-1/2">
            <div className="rounded-xl p-6 min-h-64 bg-secondarycolor border border-gray-600/[0.5]">
              <div className="flex items-center gap-3">
                {/* Service's logo */}
                <div className="w-14 h-14">
                  <img
                    src={"./img/serv04.png"}
                    alt="service_one"
                    className="w-full h-full"
                  />
                </div>
                {/* Service's name */}
                <div>
                  <h2 className="text-2xl font-bold">Custom UI/UX Solutions</h2>
                </div>
              </div>
              {/* Description */}
              <div className="w-full py-3">
                <p className="text-sm text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
