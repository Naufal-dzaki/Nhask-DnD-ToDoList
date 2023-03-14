import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickerComponent = ({ label, value, setValue }) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={label}
        className="text-lg text-nhask-secondary font-medium">
        {label}
      </label>
      <div className="mt-2">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DatePicker
              disableFuture={false}
              disablePast={true}
              label=""
              // openTo="year"
              views={["year", "month", "day"]}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              // PopperProps={{
              // }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#9CB0A4",
                        borderRadius: 4,
                      },
                      "&:hover fieldset": {
                        borderColor: "#9CB0A4",
                        borderRadius: 4,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#9CB0A4",
                        borderRadius: 4,
                      },
                      "&.Mui-error fieldset": {
                        borderColor: "#9CB0A4",
                        borderRadius: 4,
                      },
                    },
                    svg: { color: "#9CB0A4" },
                    input: { color: "#9CB0A4", fontFamily: "Fredoka" },
                    label: { color: "#9CB0A4" },
                  }}
                />
              )}
            />
          </Stack>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default DatePickerComponent;
