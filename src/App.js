import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [tracks, setTracks] = useState([]);
  const [token, setToken] = useState(null);
  // First we create a function to fetch music data from the Spotify API based on search query.
      

    const fetchMusicData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${keyword}&type=track`, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch music data");
        }
  
        const jsonData = await response.json();
        setTracks(jsonData.tracks.items);
      } catch (error) {
        setMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        fetchMusicData();
      }
    };
    
    useEffect(() => {
      initializePlaylist();
  
      const fetchToken = async () => {
        try {
          const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials&client_id=3cf148b50f394ed7bf135002bea69400&client_secret=71cf1d5bce2b45b0a8f5cd9e08e75556",
          });
  
          if (!response.ok) {
            throw new Error("Failed to fetch token");
          }
  
          const jsonData = await response.json();
          setToken(jsonData.access_token);
        } catch (error) {
          setMessage(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchToken();
    }, []);


  return (
    <>
      <Navbar
        keyword={keyword}
        setKeyword={setKeyword}
        handleKeyPress={handleKeyPress}
        fetchMusicData={fetchMusicData}
      />
    </>
  );
}

export default App;
