import { Form } from "./Form";
import { Map } from "./Map";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#232323]">
      <div className="max-w-['1220px'] w-full h-full">
        <h1 className="font-cursive text-[40px] text-center	 mt-[76px]">
          CODE DELIVERY
        </h1>

        <div className="relative">
          <Map />

          <div className="flex flex-row w-full justify-between mt-6">
            <Form />
            <div className="flex flex-row gap-8 pr-6">
              <a href="https://www.linkedin.com/in/salesof7/">
                <LinkedInIcon
                  sx={{
                    fontSize: "42px",
                    color: "#fff",
                  }}
                />
              </a>
              <a href="https://github.com/salesof7">
                <GitHubIcon
                  sx={{
                    fontSize: "40px",
                    color: "#fff",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
