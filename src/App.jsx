import { Carousel } from "@material-tailwind/react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function App() {

    // I preloaded three models, which are made by Tipatat Chennavasin [CC-BY] via Poly Pizza.
    const bulbasaur = useLoader(GLTFLoader, "./bulbasaur.glb");
    const charmander = useLoader(GLTFLoader, "./charmander.glb");
    const squirtle = useLoader(GLTFLoader, "./squirtle.glb");

    return (
        // For carousel, I use material-tailwind to implement it quickly. It contains three Canvas, each of which holds the model.
        <Carousel className="h-screen w-screen bg-gray-500">
            {/* Canvas #1: Bulbasaur*/}
            <Canvas>
                <Environment preset="city" />
                <OrbitControls />
                <primitive
                    rotation={[0, 9, 0]}
                    scale={3}
                    object={bulbasaur.scene}
                />
            </Canvas>
            {/* Canvas #2: Charmander*/}
            <Canvas>
                <Environment preset="city" />
                <OrbitControls />
                <primitive
                    rotation={[0, 9, 0]}
                    scale={3}
                    object={charmander.scene}
                />
            </Canvas>
            {/* Canvas 3: Squirtle*/}
            <Canvas>
                <Environment preset="city" />
                <OrbitControls />
                <primitive
                    rotation={[0, 10, 0]}
                    position={[0,0.25,0]}
                    scale={6}
                    object={squirtle.scene}
                />
            </Canvas>

            {/*
              Each Canvas contain "Enviroment" from '@react-three/drei', which give us preset lighting for 3d Model,
              "OrbitControl" from '@react-three/drei', which allows us to rotate the model by click, hold and drag,
              and zoom in and out via scroll whell,
              and "primitive", which draw 3D Model and with the help of the array 'object', allows me to load custom 3D Model.
            */}
        </Carousel>
    );
}
