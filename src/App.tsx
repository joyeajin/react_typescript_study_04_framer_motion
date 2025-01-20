import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-300, 300], [-360, 360]);
  // useMotionValueEvent(scale, "change", (el) => console.log(el));
  const gradient = useTransform(
    x,
    [-300, 300],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 147), rgb(238, 155, 0))",
    ]
  );

  return (
    <Wrapper style={{ background: gradient }}>
      <h1>framer motion</h1>
      <br />
      <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}

export default App;
