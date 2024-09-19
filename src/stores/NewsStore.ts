import { makeObservable, observable, action } from "mobx";
import { UserStore } from "./UserStore";

export class NewsStore {
  news: any[] = [];
  searchQuery: string = "";
  isLoading: boolean = false;
  userStore: UserStore;

  constructor() {
    makeObservable(this, {
      news: observable,
      searchQuery: observable,
      isLoading: observable,
      fetchNews: action,
      setSearchQuery: action,
      clearNews: action,
    });

    this.userStore = new UserStore();
    this.fetchNews();
  }

  fetchNews() {
    this.isLoading = true;
    fetch("https://api.example.com/news")
      .then((response) => response.json())
      .then((data) => {
        this.news = data.articles;
        this.isLoading = false;
        this.userStore.logActivity("Fetched news");
      });
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
    this.fetchNews();
  }

  clearNews() {
    this.news = [];
  }
}
