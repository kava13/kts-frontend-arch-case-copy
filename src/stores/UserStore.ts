import { makeObservable, observable, action } from "mobx";
import { NewsStore } from "./NewsStore";

export class UserStore {
  activityLog: string[] = [];
  newsStore: NewsStore;

  constructor() {
    makeObservable(this, {
      activityLog: observable,
      logActivity: action,
    });

    this.newsStore = new NewsStore();
  }

  logActivity(activity: string) {
    this.activityLog.push(activity);
    if (this.activityLog.length > 10) {
      this.newsStore.clearNews();
    }
  }
}
