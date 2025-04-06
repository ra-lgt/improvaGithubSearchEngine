type FAIcon = { prefix: string; iconName: string };

const ICONS_REF: Record<string, () => Promise<{ default: FAIcon }>> = {
  CommitCommentEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faComment').then(mod => ({ default: mod.faComment })),

  CreateEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faPlusCircle').then(mod => ({ default: mod.faPlusCircle })),

  DeleteEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faTrash').then(mod => ({ default: mod.faTrash })),

  ForkEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faCodeBranch').then(mod => ({ default: mod.faCodeBranch })),

  GollumEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faBook').then(mod => ({ default: mod.faBook })),

  IssueCommentEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faComments').then(mod => ({ default: mod.faComments })),

  IssuesEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faExclamationCircle').then(mod => ({ default: mod.faExclamationCircle })),

  MemberEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faUserPlus').then(mod => ({ default: mod.faUserPlus })),

  PublicEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faUnlock').then(mod => ({ default: mod.faUnlock })),

  PullRequestEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faCodePullRequest').then(mod => ({ default: mod.faCodePullRequest })),

  PullRequestReviewEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faEye').then(mod => ({ default: mod.faEye })),

  PullRequestReviewCommentEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faCommentDots').then(mod => ({ default: mod.faCommentDots })),

  PushEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faUpload').then(mod => ({ default: mod.faUpload })),

  ReleaseEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faTag').then(mod => ({ default: mod.faTag })),

  SponsorshipEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faHeart').then(mod => ({ default: mod.faHeart })),

  WatchEvent: () =>
    import('@fortawesome/free-solid-svg-icons/faStar').then(mod => ({ default: mod.faStar })),


};

export const getIcon = async (eventType: string): Promise<FAIcon> => {
  const loader = ICONS_REF[eventType];
  if (loader) {
    const { default: icon } = await loader();
    return icon;
  }

  // fallback icon
  const { faQuestion } = await import('@fortawesome/free-solid-svg-icons/faQuestion');
  return faQuestion;
};

export const formatDate = (dateString?: string): string => {
    if (!dateString) return 'Not available';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid date' : date.toLocaleDateString();
  };
  