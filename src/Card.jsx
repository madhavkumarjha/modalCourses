import PropTypes from "prop-types";

const Card = ({ lesson }) => {
  console.log(lesson);
  return (
    <div className="bg-[#F5F5F5] flex flex-col px-[2rem] py-[2rem] items-start rounded-md">
      <div className="flex gap-2 items-center">
        {<lesson.icon className="text-[#1DBF73] text-3xl" />}
        <p className="font-semibold uppercase text-xl">{lesson.lesson}</p>
      </div>
      <p className="font-semibold">{lesson.desc}</p>
    </div>
  );
};

Card.propTypes = {
  lesson: PropTypes.object.isRequired,
};

export default Card;
