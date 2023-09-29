import './button2.css'

function Button2(props) {
    const {variant = 'primary', children, ...rest} = props

    return (
        <button className={`button ${variant}`} {...rest}>{children}</button>
    );
}

export default Button2;