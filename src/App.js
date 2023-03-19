
import { GoBell } from 'react-icons/go';
import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button success rounded outline className={'mb-5'}>
                    <GoBell/>
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoBell/>
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoBell/>
                    See deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoBell/>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    <GoBell/>
                    Something!
                </Button>
            </div>
        </div>
    );
}

export default App;
