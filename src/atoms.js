import { SUBJECTS } from "./SUBJECTS";
import { atomFamily, selector } from "recoil";

export const subjectAtomFamily = atomFamily({
    key: "subjectAtomFamily",
    default: id => {
        return SUBJECTS.find(x => x.id === id);
    }
});

export const iaMarkAtomFamily = atomFamily({
    key: "iaMarkAtomFamily",
    default: id => {
        return SUBJECTS.find(x => x.id === id);
    }
});

export const creditsAtomFamily = atomFamily({
    key: "creditsAtomFamily",
    default: id => {
        return SUBJECTS.find(x => x.id === id);
    }
});

export const sgpaAtomFamily = atomFamily({
    key: "sgpaAtomFamily",
    default: id => {
        return SUBJECTS.find(x => x.id === id);
    }
});
