let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:8080";
}else if(hostname === "https://https://ad34-2406-5900-104d-98af-b836-e217-67e3-f668.ngrok-free.app"){
  backendHost = "http://localhost:8080";
}else if(hostname === "ad34-2406-5900-104d-98af-b836-e217-67e3-f668.ngrok-free.app"){
  backendHost = "http://localhost:8080";
}

export const API_BASE_URL = `${backendHost}`;
