
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "toggleIsExerciseSelected": "START_EXERCISE";
"toggleIsPluggedIn": "TUNE_GUITAR";
"toggleIsTuned": "SELECT_EXERCISE";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "playingExercise" | "pluggingInGuitar" | "selectingExercise" | "tuningGuitar";
        tags: never;
      }
  