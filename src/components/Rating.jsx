import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Rating = () => {
    // State untuk nilai rating
    const [value, setValue] = useState(5);

    // Array yang berisi path gambar rating
    const units = ["/Rating/1.png", "/Rating/2.png", "/Rating/3.png", "/Rating/4.png", "/Rating/5.png"]

    // Fungsi untuk menangani perubahan nilai rating
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Indeks gambar yang akan ditampilkan berdasarkan nilai rating
    const imgIndex = Math.min(Math.floor(value / 2), units.length - 1);

    return (
        <Box sx={{ width: 307 }}>
            {/* Label dan nilai rating */}
            <Typography id="FixTextPoppins" gutterBottom>
                <div className="flex justify-between text-white relative top-3">
                    <div className="font-bold text-xs">RATE BG</div>
                    <div className="font-bold text-xs">{value.toFixed(1)}</div>
                </div>
            </Typography>

            {/* Tampilkan gambar rating */}
            <div className="flex justify-center mb-3">
                <img
                    src={units[imgIndex]}
                    alt={`Rating ${imgIndex + 1}`}
                    className="w-10 h-10"
                    id="ImgRating"
                    style={{ filter: 'none' }} // Filter dihapus
                />
            </div>

            {/* Slider untuk menilai */}
            <Slider
                value={value}
                min={0}
                step={0.1}
                max={10}
                color="secondary"
                valueLabelDisplay="off"
                onChange={handleChange}
                sx={{
                    "& .MuiSlider-thumb": {
                        height: "1.5rem",
                        width: "1.5rem",
                        border: "none",
                        backgroundColor: "white",
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                        "&:hover, &.Mui-focusVisible": {
                            boxShadow: "0 0 15px rgba(255, 255, 255, 1)",
                        },
                    },
                    "& .MuiSlider-valueLabel": {
                        backgroundColor: "transparent",
                    },
                }}
            />
        </Box>
    );
};

export default Rating;
