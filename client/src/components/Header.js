import { createUseStyles } from "react-jss";
const useStyle = createUseStyles({
    // css
    test: {
        color: "blue"
    }
  });

const Header = () => {
    const classes = useStyle();
    return (
        // html
        <>
        <div className={classes.test}> quang </div>
        </>
    )
}

export default Header;