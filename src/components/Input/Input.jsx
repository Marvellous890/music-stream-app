import './input.css'

function Input({size = 'small'}) {

    switch (size) {
        case "small":
            return <input className="w-8"/>

        case "medium":
            return <input className="w-12"/>

        case "large":
            return <input className="w-16"/>
    }
}

export default Input;