'use client';

import { useEffect, useState } from 'react';
import { ColorPicker } from 'antd';
import axios from 'axios';
import { Metadata } from "next";

interface ScreenProps {
    mode: string,
    drawing: "0" | "1" | "2" | "3",
    message: string,
    colorr: number,
    colorg: number,
    colorb: number,
    rdmColors: "0" | "1",
    moving: "0" | "1",
    mdp: string
}

interface ModeProps {
    id: string,
    mode: string,
    drawing: "0" | "1" | "2" | "3",
    message: string,
    colorr: number,
    colorg: number,
    colorb: number,
    rdmColors: "0" | "1",
    moving: "0" | "1",
    mdp: string
}

export default function Screen() {
    const [screenProps, setScreenProps] = useState<ScreenProps>();
    const [url, setUrl] = useState('10.61.16.78:80');
    const [modes, setModes] = useState<ModeProps[]>([]);
    const [color, setColor] = useState('rgb(255, 255, 255)');
    const [mdpInput, setMdpInput] = useState<HTMLInputElement | null>(null);
    const [messageInput, setMessageInput] = useState<HTMLInputElement | null>(null);
    const [wrongMDP, setWrongMDP] = useState(false);
    const [wrongURL, setWrongURL] = useState<string | null>(null);

    useEffect(() => {
        setMdpInput(document.querySelector('#mdp') as HTMLInputElement);
        setMessageInput(document.querySelector('#message') as HTMLInputElement);
    }, []);
    
    async function getScreenProps() {
        setWrongURL(null);
        try {
            const response = await axios.get(`http://${url}/currData`);
            const screenProps = response.data;
            console.log('Screen props fetched:', screenProps);
            setScreenProps(screenProps);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setWrongURL('Error fetching screen properties: ' + error);
                return;
            }
        }
    }

    async function fetchModes() {
        const response = await axios.get(`http://${url}/modesList`);
        const fetchModes = response.data.modesList.modes;
        console.log('Modes fetched:', fetchModes);
        setModes(fetchModes);
    }
    
    useEffect(() => {
        fetchModes();
        getScreenProps();
    }, [url]);

    async function update() {
        try {
            const res = await axios.post(`http://${url}/newData`, {
                mode: "1",
                drawing: "0",
                message: messageInput?.value,
                colorr: color ? parseInt(color.slice(4, color.indexOf(','))) : 255,
                colorg: color ? parseInt(color.slice(color.indexOf(',') + 1, color.lastIndexOf(','))) : 255,
                colorb: color ? parseInt(color.slice(color.lastIndexOf(',') + 1, color.indexOf(')'))) : 255,
                rdmColors: "0",
                Moving: "1"
            }, {
                headers: {
                    'mdp': mdpInput?.value
                }
            });
            setWrongMDP(false);
            console.log('Color updated:', res.data);
            await fetchModes();
            await getScreenProps();
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 403) {
                setWrongMDP(true);
            }
        }
    }
    async function newMode() {
        try {
            const res = await axios.post(`http://${url}/newMode`, {
                id: "",
                mode: "1",
                drawing: "0",
                message: messageInput?.value,
                colorr: color ? parseInt(color.slice(4, color.indexOf(','))) : 255,
                colorg: color ? parseInt(color.slice(color.indexOf(',') + 1, color.lastIndexOf(','))) : 255,
                colorb: color ? parseInt(color.slice(color.lastIndexOf(',') + 1, color.indexOf(')'))) : 255,
                rdmColors: "0",
                moving: "1"
            }, {
                headers: {
                    'mdp': mdpInput?.value
                }
            });
            setWrongMDP(false);
            console.log('Mode created:', res.data);
            await fetchModes();
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 403) {
                setWrongMDP(true);
            }
        }
    }
    async function deleteMode(id: string): Promise<void> {
        try {
            const res = await axios.post(`http://${url}/deleteMode`, {
                id: id
            }, {
                headers: {
                    'mdp': mdpInput?.value
                }
            });
            setWrongMDP(false);
            console.log('Mode deleted:', res.data);
            setModes(modes.filter(mode => mode.id !== id));
            await fetchModes();
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 403) {
                setWrongMDP(true);
            }
        }
    }
    async function applyMode(id: string): Promise<void> {
        try {
            const res = await axios.post(`http://${url}/applyMode`, {
                id: id
            }, {
                headers: {
                    'mdp': mdpInput?.value
                }
            });
            setWrongMDP(false);
            console.log('Mode applied:', res.data);
            await fetchModes();
            await getScreenProps();
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 403) {
                setWrongMDP(true);
            }
        }
    }
    return (
        <div className='flex w-screen h-screen justify-center items-center flex-col'>
            <div>
                <label htmlFor="url">URL</label>
                <input type="text" id='url' value={url} onChange={(e) => { setUrl(e.target.value); getScreenProps(); }} />
                {wrongURL? <span style={{ color: 'red' }}>{wrongURL}</span> : null}
                <label htmlFor="mdp">Mot de passe</label>
                <input type="text" id='mdp' placeholder="Mot de passe" />
                {wrongMDP? <span style={{ color: 'red' }}>Mot de passe incorrect</span> : null}
            </div>
            <div>
                <label htmlFor="options">Options</label>
                <select defaultValue="1">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label htmlFor="message">Message</label>
                <input type="text" id='message' placeholder="Message" required />
                <ColorPicker value={color} onChange={(newColor) => setColor(newColor.toRgbString())} format="rgb" />
                <button onClick={() => update()}>Mettre à jour</button>
                <button onClick={() => newMode()}>Créer un mode</button>
            </div>
            <div>
                <h2>Propriétés de l&apos;écran :</h2>
                <div className='bg-[#556D7A] rounded-2xl border-4 border-black m-4 p-4'>
                    <h1 style={{ color: `rgb(${screenProps?.colorr}, ${screenProps?.colorg}, ${screenProps?.colorb})`}} className='text-6xl'>{screenProps?.message}</h1>
                </div>
            </div>
            <div>
                <h2>Modes disponibles :</h2>
                <ul className='flex flex-row'>
                    {modes.map((mode, index) => (
                        <li key={index}>
                            <div className='bg-[#556D7A] rounded-2xl border-4 border-black m-4 p-4'>
                                <h1 style={{ color: `rgb(${mode.colorr}, ${mode.colorg}, ${mode.colorb})` }} className='text-6xl'>{mode.message}</h1>
                                <button onClick={() => applyMode(mode.id)}>Appliquer</button>
                                <button onClick={() => deleteMode(mode.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};