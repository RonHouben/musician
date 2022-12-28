import { createMachine } from 'xstate';

export const onboardUserMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QHsB2AjZBDAThAqrGDgLJYDGAFgJapgB0ADsgC5iovVYA2AcmAHdCxJtwCuUKLSgBJVAHEx1FrgDEAFXy8AogH15+GeoCCAJQDaABgC6iUM1jLqaOyAAeiAEwAWAOz1vAE5PAEZfTx8Q0MtA7wAaEABPRBCg+ksMjN9wwIBmENzAgFYAXxKEtExcAiJSCho6JlZ2Th5+IVr6FjFUaUVlNQBlbQAZbQBhdV1tAA1tU3GZYatbJBAHJxc1jwQiooAOel8Q-d9cv28okJiE5IRUwPTM65DA31iY-bKKjGw8YTqVFoDGYbA4XD4ggB9CI3DA5E4qCg2jcxHI1CIqkGJlMU1m80Wyxsrg2nC2oB2H3SnnOlmOADZ8t5PL5bik0pksrkirlcr5vEEyuUQKhkBA4K5Kn8asQyEC6CTkI4yahXDsALQ+NkITW5eiBA2xU70t68nmlYVS6oAuUNEHNcFtKG1RXK5yq7ZeeJJRD0zwBQ3FCI+DJhb4gK3-Wq24FNMGtSEdESMcSSaRyfoqHCuzYeimIcLah70Iqc7KePIFYrhyMywF2uMtCHtaHdXpIzO4HMqtWIS56+mnbz7C5XGLeu7F0uZcuVwoWn5VKOy+qx0FNp1JnAwsBwhHSFFojFgbvu3sIXxFfxDg30nnHUKBItpaeWF5vD6BL6W37W6Orxp10dRNoRTLBEgPVEcHRIhT3JdwUgKSwAwNfZcnpQdUhHZ9HlfOluV5flBSFIA */
  createMachine({
    id: 'onboardUserMachine',

    states: {
      pluggingInGuitar: {
        on: {
          TUNE_GUITAR: 'tuningGuitar'
        }
      },

      tuningGuitar: {
        on: {
          SELECT_EXERCISE: 'selectingExercise'
        }
      },

      selectingExercise: {
        on: {
          START_EXERCISE: 'playingExercise'
        }
      },

      playingExercise: {}
    },

    initial: 'pluggingInGuitar'
  });
