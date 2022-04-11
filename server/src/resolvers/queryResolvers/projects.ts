const PROJECTS = [{
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  projectImagePath: "https://en.wikipedia.org/wiki/Main_Page#/media/File:Gelati_1661.jpg",
  projectName: "ProjectName",
  projectDescription: "project description project description project description",
  supportCurrent: 10,
  supportTarget: 100,
  remindedUserIds: [1, 2],
  expireDate: "May-1-2022",
  category: "Adventure",
  story: "This is a story",
  characterDesignPath: "https://en.wikipedia.org/wiki/Main_Page#/media/File:Gelati_1661.jpg",
  originalPicturePath: "https://en.wikipedia.org/wiki/Main_Page#/media/File:Gelati_1661.jpg",
  voicePath: "",
  soundEffectPath: "",
  creatorIds: [1, 2],
  creators: [{
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    userName: "Sota",
    email: "test@test1.com",
    position: "creator"
  }],
  comments: [{
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    projectId: 1,
    commentText: "This is a comment",
    commentedUser: {
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userName: "Someone",
        email: "test@test2.com",
        position: "creator"
    }
  }],
  announces: [{
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    projectId: 1,
    announceText: "This is an announce"
  }],
}]

export const projects = () => PROJECTS