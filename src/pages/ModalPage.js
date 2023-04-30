
import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>
    );

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>This is the modal text</p>
    </Modal>;

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet arcu in lectus euismod ultrices. Donec bibendum dignissim ante, et varius arcu fermentum sit amet. Curabitur id iaculis eros, eu faucibus lacus. Suspendisse id diam quam. Sed mollis arcu vitae dui eleifend faucibus. Aliquam vitae dui eleifend, finibus sapien vitae, pharetra massa. Duis vehicula sit amet libero luctus lacinia. Vestibulum cursus nisl eget augue accumsan consequat. Integer mollis, erat id molestie laoreet, quam risus ultricies nunc, a mattis turpis neque nec augue.</p>   
        </div>
    );
};

export default ModalPage;
