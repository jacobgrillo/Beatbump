// Generated by https://quicktype.io

// Generated by https://quicktype.io

export interface ITwoRowItemRenderer {
	title?: string;
	thumbnails?: Array<Thumbnail>;
	aspectRatio?: string;
	videoId?: string;
	playlistId?: string;
	musicVideoType?: string;
	playerParams?: string;
	subtitle?: Subtitle[];
}

export interface ITwoRowSquareItemRenderer extends ITwoRowItemRenderer {
	title: string;
	thumbnails: Array<Thumbnail>;
	aspectRatio: string;
	playlistId: string;
	endpoint: Endpoint;
	subtitle: Subtitle[];
}

interface Endpoint {
	browseId: string;
	pageType: string;
}

interface Subtitle {
	text: string;
	navigationEndpoint?: NavigationEndpoint;
}

interface NavigationEndpoint {
	clickTrackingParams: string;
	browseEndpoint: BrowseEndpoint;
}

interface BrowseEndpoint {
	browseId: string;
	browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}

interface BrowseEndpointContextSupportedConfigs {
	browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
}

interface BrowseEndpointContextMusicConfig {
	pageType: string;
}

interface Thumbnail {
	url: string;
	width: number;
	height: number;
	placeholder?: string;
}

export type ICarouselTwoRowItem = ITwoRowItemRenderer &
	ITwoRowSquareItemRenderer;
