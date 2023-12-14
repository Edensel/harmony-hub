import './App.css';
import NavBar from './components/NavBar';

function App() {
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
