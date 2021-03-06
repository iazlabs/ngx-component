import { ControlInterface } from '../compact/types';
import { InputConfigInterface, InputValidationRule } from '../types';
import { buildRequiredIfConfig } from '../helpers/builders';

/**
 * Creates an instance of {@see InputConfigInterface} interface
 *
 * @param source
 */
export function buildHiddenInput(source: Partial<ControlInterface>) {
  return {
    type: source.type,
    formControlName: source.controlName,
    value: source.value,
    requiredIf: source.requiredIf
      ? buildRequiredIfConfig(source.requiredIf)
      : undefined,
    formControlIndex: source.controlIndex,
    formControlGroupKey: source.controlGroupKey,
    rules: {
      isRequired: Boolean(source.required),
    } as InputValidationRule,
    disabled: true,
    readOnly: true,
  } as InputConfigInterface;
}
