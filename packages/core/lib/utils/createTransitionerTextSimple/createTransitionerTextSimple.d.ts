interface CreateTransitionerTextSimpleParams {
    text: string;
    duration: number;
    isEntering?: boolean;
    dynamicDuration?: boolean;
    onChange: (newText: string) => void;
    onComplete?: () => void;
}
interface TransitionerTextSimple {
    cancel: () => void;
}
declare const createTransitionerTextSimple: (params: CreateTransitionerTextSimpleParams) => TransitionerTextSimple | null;
export { CreateTransitionerTextSimpleParams, createTransitionerTextSimple, TransitionerTextSimple };
