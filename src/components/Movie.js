import { motion } from 'framer-motion';

const Movie = props => {
  const { title } = props;
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>{title}</h2>

      <img src={'https://image.tmdb.org/t/p/w500' + props.backdrop} alt="" />
    </motion.div>
  );
};

export default Movie;
