import { Carousel } from "@material-tailwind/react";
import { Canvas } from "@react-three/fiber";

export default function App() {
    return (
        <Carousel className="rounded-xl bg-gray-500">
            <Canvas>
                <directionalLight position={[0, 0, 4]} />
                <mesh>
                    <boxGeometry args={[2, 2, 4]} />
                    <meshStandardMaterial color={"red"} />
                </mesh>
            </Canvas>
            <Canvas>
                <directionalLight position={[0, 0, 4]} />
                <mesh>
                    <boxGeometry args={[2, 2, 4]} />
                    <meshStandardMaterial color={"green"} />
                </mesh>
            </Canvas>
            <Canvas>
                <directionalLight position={[0, 0, 4]} />
                <mesh>
                    <boxGeometry args={[2, 2, 4]} />
                    <meshStandardMaterial color={"blue"} />
                </mesh>
            </Canvas>
        </Carousel>
    );
}
