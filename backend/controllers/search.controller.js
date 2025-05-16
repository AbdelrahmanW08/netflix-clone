import { User } from "../models/user.model.js";
import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function searchPerson (req, res) {
  const {query} = req.params;
  try {
    const data = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?language=en-US&query=${query}&page=1&include_adult=false`); 
    if (data.results.length === 0) {
      res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id:data.results[0].id,
          image: data.results[0].profile_path,
          title: data.results[0].name,
          searchType: "person",
          createdAt: new Date()
        }
      }
    });

    res.status(200).json({success: true, content: data.results});
  } catch (error) {
    res.status(500).json({success: false, message: 'Internal Server Error: ' + error.message});
  }
}

export async function searchMovie (req, res) {
  const {query} = req.params;
  try {
    const data = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=1&include_adult=false`); 
    if (data.results.length === 0) {
      res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id:data.results[0].id,
          image: data.results[0].poster_path,
          title: data.results[0].title,
          searchType: "movie",
          createdAt: new Date()
        }
      }
    });

    res.status(200).json({success: true, content: data.results});
  } catch (error) {
    res.status(500).json({success: false, message: 'Internal Server Error: ' + error.message});
  }
}

export async function searchTv (req, res) {
  const {query} = req.params;
  try {
    const data = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?language=en-US&query=${query}&page=1&include_adult=false`); 
    if (data.results.length === 0) {
      res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id:data.results[0].id,
          image: data.results[0].poster_path,
          title: data.results[0].name,
          searchType: "tv",
          createdAt: new Date()
        }
      }
    });

    res.status(200).json({success: true, content: data.results});
  } catch (error) {
    res.status(500).json({success: false, message: 'Internal Server Error: ' + error.message});
  }
}

export async function getSearchHistory (req, res) {
  try {
    res.status(200).json({success: true, content: req.user.searchHistory});
  } catch (error) {
    res.status(500).json({success: false, message: 'Internal Server Error'});
  }
}

export async function removeItemFromSearchHistory (req, res) {
  let {id} = req.params;
  id = parseInt(id);

  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistory: {
          id:id
        }
      }
    });
    res.status(200).json({success: true, message: "Item removed from search history"});
  } catch (error) {
    res.status(500).json({success: false, message: 'Internal Server Error'});
  }
}