import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FormEvent, useEffect, useState } from "react";
import { Route } from "../domain/models";

const API_URL = import.meta.env.VITE_API_URL;

export function Form() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [clicked, setClicked] = useState<boolean>(false);
  const [selected, setSelected] = useState<Route | null>(null);
  const [runningProcess, setRunningProcess] = useState<string[]>([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      const data = await fetch(`${API_URL}/routes`);
      const dataJSON: Route[] = await data.json();
      setRoutes(dataJSON);
    };
    fetchRoutes().catch(console.error);
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (selected) setRunningProcess([...runningProcess, selected._id]);
    setSelected(null);
  }

  return (
    <>
      <form className="flex gap-7" onSubmit={handleSubmit}>
        {!clicked ? (
          <div
            className="w-[320px] h-[48px] bg-black rounded-xl flex justify-between items-center px-3 cursor-pointer"
            onClick={() => setClicked(!clicked)}
          >
            <span className="font-goudy first-line:tracking-wider ml-3">
              {selected ? selected.title : "SELECT ROUTE"}
            </span>
            <ExpandMoreIcon
              sx={{
                fontSize: "28px",
                color: "#fff",
              }}
            />
          </div>
        ) : (
          <div onClick={() => setClicked(!clicked)}>
            <div className="absolute t-0 w-[320px] h-[196px] bottom-[48px] z-1 border-[3px] border-black border-red bg-[#232323] rounded-t-xl flex flex-col items-end justify-start gap-2 p-3">
              {routes.map((route) => {
                return (
                  <button
                    key={route._id}
                    className={`w-[256px] h-[48px] flex justify-center items-center rounded-xl hover:bg-[#5C5C5C] hover:cursor-pointer ${
                      runningProcess.includes(route._id)
                        ? "bg-[#5C5C5C]"
                        : "bg-[#9D9D9D]"
                    }`}
                    onClick={() => setSelected(route)}
                    disabled={runningProcess.includes(route._id) ? true : false}
                  >
                    <span className="font-goudy tracking-wider ml-3 text-black">
                      {route.title}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="w-[320px] h-12 z-2 bg-black rounded-b-xl flex justify-between items-center px-3 cursor-pointer">
              <span className="font-goudy tracking-wider ml-3">
                {selected ? selected.title : "SELECT ROUTE"}
              </span>
              <ExpandLessIcon
                sx={{
                  fontSize: "28px",
                  color: "#fff",
                }}
              />
            </div>
          </div>
        )}

        <button
          className="w-12 h-12 bg-black rounded-xl hover:bg-slate-700"
          onClick={handleSubmit}
        >
          <ChevronRightIcon
            sx={{
              fontSize: "36px",
              color: "#fff",
            }}
          />
        </button>
      </form>

      <div className="w-full flex flex-row justify-end gap-6 mr-[70px] ">
        {runningProcess.length > 0
          ? runningProcess.sort().map((process) => {
              return (
                <div
                  key={`p${process}`}
                  className="w-[48px] h-[48px] flex justify-center items-center bg-black rounded-xl font-cursive"
                >
                  {process}
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
