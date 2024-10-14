import * as React from 'react';
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView.js";
import "@arcgis/core/assets/esri/css/main.css";

export interface IMapProps {
}

export class Map extends React.Component<IMapProps> {
    private mapRef: React.RefObject<HTMLDivElement>;

    constructor(props: IMapProps) {
        super(props);
        this.mapRef = React.createRef();
    }

    componentDidMount(): void {
        if (!this.mapRef || !this.mapRef.current) {
            console.error("MapV4 - no mapRef");
            return;
        }

        const webmap = new WebMap({
            portalItem: {
                id: "1ecc32d3bc6e4ae19d06b4c362c53f25"
            }
        });

        const view = new MapView({
            map: webmap,
            container: this.mapRef.current
        });
    }

    public render(): React.ReactNode {
        return (
            <div style={{ width: '100%', height: `500px` }} ref={this.mapRef} />
        )
    }
}
