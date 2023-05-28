import React from "react";

export default function Content() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start space-y-4 md:space-y-0 md:space-x-14 py-10 md:py-60 mx-4 md:mx-52">
      <img
        className="h-60 md:h-96 hover:opacity-80 rounded"
        src="https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/347796665_963560258406591_2152786098214305685_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEPTg-Vs9PqPaIkHiOLIFOorJywMqKine6snLAyoqKd7nIfWzpnJrO24UERtdliP_XQYfJP8pliWt27lS8Jq0Hp&_nc_ohc=LksXjtXrKVcAX_oHZSl&_nc_ht=scontent.fmnl30-3.fna&oh=00_AfDf8MBjAI5ibAeC5aI0IQj_BXjzd7skNwtaSnjpP2KZRw&oe=64768C5A"
        alt=""
      />
      <div>
        <div className="flex items-end justify-start space-x-2 text-lg">
          <p>Hi</p>
          <p>I am</p>
          <a href="https://www.facebook.com/jhunriz.lalata/photos">
            <div className="text-blue-500 text-5xl">
              <span className="hover:text-white hover:text-6xl">J</span>
              <span className="hover:text-white hover:text-6xl">H</span>
              <span className="hover:text-white hover:text-6xl">U</span>
              <span className="hover:text-white hover:text-6xl">N</span>
              <span className="hover:text-white hover:text-6xl">R</span>
              <span className="hover:text-white hover:text-6xl">I</span>
              <span className="hover:text-white hover:text-6xl">Z</span>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-start justify-start">
          <span>Aspiring Front-End Developer</span>
          <span className="text-sm">
            Recent graduate in computer science looking to start my career in
          </span>
          <span className="text-sm">
            software development at a startup like C.G.E.
          </span>
        </div>
      </div>
    </div>
  );
}
