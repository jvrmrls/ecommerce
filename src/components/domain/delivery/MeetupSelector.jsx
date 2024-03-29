import BuildingIcon from "#/components/shared/icons/BuildingIcon.jsx";
import Regular14 from "#/components/shared/fonts/Regular14.jsx";
import Box from "@mui/material/Box";
import SemiBold16 from "#/components/shared/fonts/SemiBold16.jsx";
import PointOfMapIcon  from "#/components/shared/icons/PointOfMapIcon.jsx";
import TouchRippleEffect from "#/components/shared/TouchRippleEffect.jsx";
import CheckIcon from "#/components/shared/icons/CheckIcon.jsx";
const MeetupSelector = ({isSelected, handleEvent}) => {
  const handleClick = () => {
    if (typeof handleEvent === "function") handleEvent(2);
  }
return (
  <Box className={"relative" }
       sx={{
         bgcolor: isSelected ? "primary10.main" : "background.paper",
       }}
    onClick={handleClick}
  >

    <TouchRippleEffect className={"flex flex-col gap-2 justify-center items-center w-full  p-4 text-center "}>
      <PointOfMapIcon className={"w-[80px]"}/>
      <SemiBold16>
        Punto de encuentro
      </SemiBold16>
      <Regular14>

        Nos veremos en un punto de encuentro a cierta hora para que recojas tu pedido
      </Regular14>
      {
        isSelected &&
        <CheckIcon className={"absolute top-2 right-2 w-6"} />
      }
  </TouchRippleEffect>

  </Box>
)
}

export default MeetupSelector