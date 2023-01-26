
import { Transition } from "@headlessui/react";
import { TransitionState } from "./TransitionType";

const CreateTransitionElement = ({booleanShow, 
booleanChildren}: TransitionState) => {

    return(
<Transition
show={booleanShow}
enter="transition ease-out duration-300"
enterFrom="transform opacity-0 scale-95"
enterTo="transform opacity-100 scale-100"
leave="transition duration-100"
leaveFrom="transform opacity-100 scale-100"
leaveTo="transform opacity-0 scale-100"
>
{booleanChildren}
</Transition>
    )
}

export default CreateTransitionElement;

//unused