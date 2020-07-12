import React from 'react';
import { useFormikContext, useFormik, useField, FormikProvider } from 'formik';
import { ErrorMessage, InputWrapper, StyledForm } from './styled';
import { Checkbox } from './checkbox';
import { TextField } from './text-field';
import { isValueANumber } from './validation';
import { RequiredCheckboxKeys, BoxErrors } from '../types';

interface AddRecipeFormProps {
  recipeId: number;
}

type FormValues = {
  name: string;
  source: string;
  pageNumber: string;
  // mainIngredients: string[];
  caloriesPerServing: number | null;
  isCheap: boolean | null;
  isFavourite: boolean | null;
  isVegan: boolean | null;
  isVegetarian: boolean | null;
  isQuick: boolean | null;
  isHealthy: boolean | null;
  isSlowCooker: boolean | null;
  isInstantPot: boolean | null;
  isAirFryer: boolean | null;
  isForCompany: boolean | null;
};

export const AddRecipeForm: React.FC<AddRecipeFormProps> = ({}) => {
  const initialFormValues = {
    name: '',
    source: '',
    pageNumber: '',
    // mainIngredients: [],
    caloriesPerServing: null,
    isCheap: null,
    isFavourite: null,
    isVegan: null,
    isVegetarian: null,
    isQuick: null,
    isHealthy: null,
    isSlowCooker: null,
    isInstantPot: null,
    isAirFryer: null,
    isForCompany: null,
  };

  const formik = useFormik<FormValues>({
    onSubmit: (values) => {
      console.log('SUBMITTED ', values);
    },
    initialValues: initialFormValues,
    validate: (values) => {
      let errors: any = {};

      if (!values.name) {
        errors.name = 'This field is required';
      }

      if (!values.source) {
        errors.source = 'The recipe source is required';
      }

      if (!isValueANumber(values.caloriesPerServing)) {
        errors.caloriesPerServing = 'This needs to be a number';
      }

      // const requiredCheckboxes = [
      //   'isCheap',
      //   'isFavourite',
      //   'isVegan',
      //   'isVegetarian',
      //   'isHealthy',
      //   'isSlowCooker',
      //   'isAirFryer',
      //   'isInstantPot',
      //   'isForCompany',
      //   'isQuick',
      // ];

      // const boxErrors: BoxErrors = {};

      // const checkboxErrors = requiredCheckboxes.reduce(
      //   (acc: BoxErrors, curr: RequiredCheckboxKeys) => {
      //     if (!values[curr]) {
      //       acc[curr] = 'Please check an option!';
      //     }

      //     return acc;
      //   },
      //   boxErrors,
      // );

      // return { errors, ...checkboxErrors };

      return errors;
    },
  });

  return (
    <FormikProvider value={formik}>
      <AddRecipeFormContent />
    </FormikProvider>
  );
};

const AddRecipeFormContent = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField name="name" id="name" label="Recipe Name" />
      <TextField name="source" id="source" label="Recipe Source" />
      <TextField name="pageNumber" id="pageNumber" label="Page Number" />
      <TextField name="caloriesPerServing" id="caloriesPerServing" label="Calories Per Serving" />
      <Checkbox name="isCheap" id="isCheap" label="Is it cheap to make?" />
      <Checkbox name="isFavourite" id="isFavourite" label="Is it a favourite recipe?" />
      <Checkbox name="isVegan" id="isVegan" label="Is it vegan?" />
      <Checkbox name="isVegetarian" id="isVegetarian" label="Is it vegetarian" />
      <Checkbox name="isQuick" id="isQuick" label="Is it quick to make?" />
      <Checkbox name="isHealthy" id="isHealthy" label="Is it healthy?" />
      <Checkbox name="isSlowCooker" id="isSlowCooker" label="Is this a slow cooker recipe?" />
      <Checkbox name="isInstantPot" id="isInstantPot" label="Is this an Instant Pot Recipe?" />
      <Checkbox name="isAirFryer" id="isAirFryer" label="Is this an air fryer recipe?" />
      <Checkbox name="isForCompany" id="isForCompany" label="Is this good enough for company?" />

      <button type="submit">Submit</button>
    </StyledForm>
  );
};
