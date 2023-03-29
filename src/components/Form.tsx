import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FormEvent, useState } from "react";

export function Form() {
  const [clicked, setClicked] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("SELECT ROUTE");

  function handleSelect() {
    setClicked(!clicked);
  }

  function handleClickOption(name: string) {
    setSelected(name);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    handleClickOption("SELECT ROUTE");
  }

  return (
    <form className="flex gap-7" onSubmit={handleSubmit}>
      {!clicked ? (
        <div
          className="w-[320px] h-[48px] bg-black rounded-xl flex justify-between items-center px-3 cursor-pointer"
          onClick={handleSelect}
        >
          <span className="font-goudy first-line:tracking-wider ml-3">
            {selected}
          </span>
          <ExpandMoreIcon
            sx={{
              fontSize: "28px",
              color: "#fff",
            }}
          />
        </div>
      ) : (
        <div onClick={handleSelect}>
          <div className="absolute t-0 w-[320px] h-[196px] bottom-[48px] z-1 border-[3px] border-black border-red bg-[#232323] rounded-t-xl flex flex-col items-end justify-start gap-2 p-3">
            <div
              className="w-[256px] h-[48px] flex justify-center items-center rounded-xl bg-[#9D9D9D] hover:bg-[#5C5C5C] hover:cursor-pointer"
              onClick={(event) => handleClickOption("Rota I: Epic Route ABC")}
            >
              <span className="font-goudy tracking-wider ml-3 text-black">
                Rota I: Epic Route ABC
              </span>
            </div>
            <div
              className="w-[256px] h-[48px] flex justify-center items-center rounded-xl bg-[#9D9D9D] hover:bg-[#5C5C5C] hover:cursor-pointer"
              onClick={(event) => handleClickOption("Rota II: Epic Route BCA")}
            >
              <span className="font-goudy tracking-wider ml-3 text-black">
                Rota II: Epic Route BCA
              </span>
            </div>
            <div
              className="w-[256px] h-[48px] flex justify-center items-center rounded-xl bg-[#9D9D9D] hover:bg-[#5C5C5C] hover:cursor-pointer"
              onClick={(event) => handleClickOption("Rota III: Epic Route CAB")}
            >
              <span className="font-goudy tracking-wider ml-3 text-black">
                Rota III: Epic Route CAB
              </span>
            </div>
          </div>
          <div className="w-[320px] h-12 z-2 bg-black rounded-b-xl flex justify-between items-center px-3 cursor-pointer">
            <span className="font-goudy tracking-wider ml-3">{selected}</span>
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
  );
}
