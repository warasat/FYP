// API FOR ADDING DOCTORS

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      image,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address,
      date,
      slots_booked,
    } = req.body;
    const imageFile = req.file;
    console.log(
      {
        name,
        email,
        password,
        image,
        speciality,
        degree,
        experience,
        about,
        available,
        fees,
        address,
        date,
        slots_booked,
      },
      imageFile
    );
  } catch (error) {
    console.error(error);
  }
};
export { addDoctor };
